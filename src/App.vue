<template>
  <div class="w-2/3 mx-auto mt-24 bg-neutral-200 p-4 drop-shadow-2xl rounded">
    <p class="mb-2 p-1">
      Please select a <a href="https://en.wikipedia.org/wiki/Time-based_one-time_password">TOTP</a> aka
      2FA QR Code image or screenshot to parse out the secret.
      This secret can then be used to setup TOTP / 2FA in applications
      like <a href="https://keepassxc.org">KeepassXC</a>.
    </p>

    <p class="mb-2 p-1 w-full bg-yellow-100 rounded">
      This application works fully client-side and never transfers any data
      back to the server.
    </p>

    <input
      class="mb-4"
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
          class="my-2 w-48 h-48 object-scale-down"
          :src="imageData"
          alt="The selected QR Code (you did select a QR Code right?)"
        >
      </div>

      <div class="p-4 grow">
        <h2 class="text-center font-bold">Secret</h2>

        <pre class="my-2 p-2 w-full text-center text-2xl text-blue-900 bg-neutral-300 rounded">{{ content }}</pre>
      </div>
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
      blo: null,
      content: ''
    }
  },

  methods: {
    reset () {
      this.imageData = null
      this.blob = null
      this.content = ''
    },

    updateQRCode(event) {
      this.reset()

      if (event.target.files && event.target.files.length === 1) {
        this.blob = event.target.files[0]

        const reader = new FileReader()
        reader.addEventListener('load', () => {
          this.imageData = reader.result
          this.readQRCode()
        })

        reader.readAsDataURL(this.blob)
      }
    },

    readQRCode() {
      createImageBitmap(this.blob).then(bmp => {
        console.dir(bmp)

        const img = new Image(bmp.width, bmp.height)
        img.src = this.imageData

        const canvas = document.createElement('canvas')
        canvas.width = bmp.width
        canvas.height = bmp.height

        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)

        const canvasImage = ctx.getImageData(0, 0, bmp.width, bmp.height)
        const result = jsQr(canvasImage.data, bmp.width, bmp.height)

        const url = new URL(result.data)
        this.content = url.searchParams.get('secret')
      }).catch(err => {
        this.content = err
      })
    }
  }
}
</script>
