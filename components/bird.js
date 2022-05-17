AFRAME.registerComponent("birds", {
    init: function() {
        for (var i = 1; i <= 20; i++) {
            var id = `bird${i}`
            var posX = (Math.random() * 3000 + (-1500))
            var posZ = (Math.random() * 3000 + (-1500))
            var posY = (Math.random() * 2 + (-1))
            var position = { x: posX, y: posY, z: posZ }
            this.createbirds(id, position)
        }
    },
    createbirds: function(id, position) {
        var terrainel = document.querySelector("#terrain")
        var birdel = document.createElement("a-entity")
        birdel.setAttribute("id", id)

        birdel.setAttribute("scale", { x: 500, y: 500, z: 500 })
        birdel.setAttribute("gltf-model", "../assets/models/flying_bird/scene.gltf")
        birdel.setAttribute("position", position)
        birdel.setAttribute("animation-mixer", {});
        terrainel.appendChild(birdel)

    }
})