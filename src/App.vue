<template>
  <div class="lg:w-1-2 md:w-2/3 mx-auto mt-24 bg-neutral-200 p-4 drop-shadow-2xl rounded">
    <h1 class="text-4xl text-center">🦓</h1>
    <p class="mb-2 p-1">
      Please select a <a href="https://en.wikipedia.org/wiki/Time-based_one-time_password" class="text-blue-600 hover:text-blue-400">TOTP</a> aka
      2FA QR Code image or screenshot to parse the secret and other parameters.
      These can then be used to setup TOTP / 2FA in applications
      like <a href="https://keepassxc.org" class="text-blue-600 hover:text-blue-400">KeepassXC</a>.
    </p>

    <p class="mb-2 p-1 w-full bg-yellow-100 rounded">
      This application works fully client-side and never transfers any data
      back to the server.
    </p>

    <input
      class="mb-4 file:rounded file:p-1 file:bg-blue-900 file:text-neutral-300 file:hover:bg-blue-600 file:hover:cursor-pointer"
      type="file"
      name="qrcode"
      id="qrcode"
      :onchange="updateQRCode"
      accept="image/*"
    >

    <div class="flex" v-if="imageData !== null">
      <div class="p-4">
        <h2 class="text-center font-bold">Analysed QR Code</h2>

        <img
          class="my-2 w-96 h-96 object-scale-down flex-none"
          :src="imageData"
          alt="The selected QR Code (you did select a QR Code right?)"
        >
      </div>

      <div class="p-4 border-neutral-300 border-l">
        <template v-if="content">
          <h2 class="text-center font-bold">Data</h2>

          <div v-for="val, key of content.params" :key="key" class="flex flex-row my-2">
            <h2 class="text-center font-bold align-bottom px-2">{{ key }}</h2>
            <pre class="grow text-center text-xl text-blue-900 bg-neutral-300 rounded">{{ val }}</pre>
          </div>

          <pre class="my-2 p-2 w-full text-sm text-grey-700 whitespace-pre-wrap" title="Full URL">{{ content.url }}</pre>
        </template>
        <template v-else>
          <span class="text-center">{{ err }}</span>
        </template>
      </div>
    </div>

    <div class="text-center text-xs mt-4">
      &copy; 2022, Stefan "eFrane" Graupner<br>
      Code is available on <a href="https://github.com/eFrane/zebra" class="text-blue-600 hover:text-blue-400">GitHub</a>
    </div>
  </div>
</template>

<script>
import jsQr from 'jsqr'

export default {
  name: 'App',
  data() {
    return {
      imageData: null,
      blob: null,
      content: null,
      err: ''
    }
  },

  methods: {
    reset () {
      this.imageData = null
      this.blob = null
      this.content = null
      this.err = ''
    },

    updateQRCode (event) {
      this.reset()

      if (event.target.files?.length === 1) {
        this.blob = event.target.files[0]

        const reader = new FileReader()
        reader.addEventListener('load', () => {
          this.imageData = reader.result
          this.readQRCode()
        })

        reader.readAsDataURL(this.blob)
      }
    },

    readQRCode () {
      createImageBitmap(this.blob).then(bmp => {
        const img = new Image(bmp.width, bmp.height)
        img.src = this.imageData

        const canvas = document.createElement('canvas')
        canvas.width = bmp.width
        canvas.height = bmp.height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)

        const canvasImage = ctx.getImageData(0, 0, bmp.width, bmp.height)
        const result = jsQr(canvasImage.data, bmp.width, bmp.height)

        try {
          const url = new URL(result.data)
        const params = {}

          for (const [key, value] of url.searchParams) {
            params[key] = value
          }

          this.content = {
            url: result.data,
            params: params
          }
        } catch(e) {
          this.err = 'The QR code does not seem to contain a valid 2FA authenticator URL.'
        }
      }).catch(err => {
        this.err = err
      })
    }
  }
}
</script>
