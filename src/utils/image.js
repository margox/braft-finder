export const compressImage = (url, width = 1280, height = 800) => {

  return new Promise((resolve, reject) => {

    const image = new Image()

    image.src = url

    image.onerror = function (error) {
      reject(error)
    }

    image.onload = function () {

      try {

        const compressCanvas = document.createElement('canvas')
        const scale = (this.width > width || this.height > height) ? (this.width > this.height ? width / this.width : height / this.height) : 1

        compressCanvas.width = this.width * scale
        compressCanvas.height = this.height * scale

        const canvasContext = compressCanvas.getContext('2d')
        canvasContext.drawImage(this, 0, 0, compressCanvas.width, compressCanvas.height)

        resolve({
          url: compressCanvas.toDataURL('image/png', 1),
          width: compressCanvas.width,
          height: compressCanvas.height
        })

      } catch (error) {
        reject(error)
      }

    }

  })

}