namespace SpriteKind {
    export const map = SpriteKind.create()
    export const rocketengine = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = -25
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ay = 20
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight2, function (sprite, location) {
    mySprite.setVelocity(0, -1)
})
let mySprite: Sprite = null
let angle = 0
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
effects.clouds.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . 1 . . . . . . . 
    . . . . . . 1 f 1 . . . . . . 
    . . . . . 1 f f f 1 . . . . . 
    . . . . 1 f f f f f 1 . . . . 
    . . . . 1 f f 1 f f 1 . . . . 
    . . . . 1 f f f f f 1 . . . . 
    . . . . 1 f f f f f 1 . . . . 
    . . . . 1 f f f f f 1 . . . . 
    . . . 1 f f f f f f f 1 . . . 
    . . . 1 f 1 1 1 1 1 f 1 . . . 
    . . 1 f f 1 . . . 1 f f 1 . . 
    . . 1 f 1 . . . . . 1 f 1 . . 
    . . 1 f 1 . . . . . 1 f 1 . . 
    . . . 1 . . . . . . . 1 . . . 
    . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    7 3 7 
    3 7 3 
    7 3 7 
    `, SpriteKind.rocketengine)
scene.cameraFollowSprite(mySprite)
scaling.scaleByPercent(mySprite, -5, ScaleDirection.Uniformly, ScaleAnchor.Middle)
mySprite.ay = 20
let myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
let mySprite2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.map)
game.onUpdate(function () {
    mySprite2.destroy()
    myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
    minimap.includeSprite(myMinimap, mySprite, MinimapSpriteScale.MinimapScale)
    mySprite2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.map)
    mySprite2.setPosition(mySprite.left, mySprite.top)
    mySprite3.setPosition(mySprite.x, mySprite.y)
})
