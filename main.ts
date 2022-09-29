namespace SpriteKind {
    export const map = SpriteKind.create()
    export const rocketengine = SpriteKind.create()
    export const fireball = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ship.ay = 25 * Math.sin(angle)
    ship.ax = 25 * Math.cos(angle)
    engineflame.setFlag(SpriteFlag.Invisible, false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    angle += 15 * (3.141592653589793 / 180)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    angle += -15 * (3.141592653589793 / 180)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    ship.ay = 20
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight2, function (sprite, location) {
    ship.setVelocity(0, -1)
})
let engineflame: Sprite = null
let ship: Sprite = null
let angle = 0
angle = 0
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
effects.clouds.startScreenEffect()
ship = sprites.create(img`
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
let engine = sprites.create(img`
    3 7 
    7 3 
    `, SpriteKind.rocketengine)
engineflame = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . f 2 2 4 4 4 4 4 2 2 f . . . 
    . f 2 2 4 4 4 4 4 4 4 2 2 f . . 
    . f 2 4 4 4 5 5 5 4 4 4 2 f . . 
    . f 2 4 4 5 5 5 5 5 4 4 2 f . . 
    . f 2 4 4 5 5 5 5 5 4 4 2 f . . 
    . f 2 4 4 5 5 5 5 5 4 4 2 f . . 
    . f 2 4 4 4 5 5 5 4 4 4 2 f . . 
    . f 2 2 4 4 4 4 4 4 4 2 2 f . . 
    . . f 2 2 4 4 4 4 4 2 2 f . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
engineflame.setFlag(SpriteFlag.Invisible, true)
scaling.scaleByPercent(engineflame, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
scene.cameraFollowSprite(ship)
scaling.scaleByPercent(ship, -5, ScaleDirection.Uniformly, ScaleAnchor.Middle)
ship.ay = 20
let myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
let minimap2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.map)
game.onUpdate(function () {
    minimap2.destroy()
    myMinimap = minimap.minimap(MinimapScale.Eighth, 2, 0)
    minimap.includeSprite(myMinimap, ship, MinimapSpriteScale.MinimapScale)
    minimap2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.map)
    minimap2.setPosition(ship.x - 50, ship.y - 35)
    engine.setPosition(ship.x + -8 * Math.cos(angle), ship.y + -8 * Math.sin(angle))
    engineflame.setPosition(ship.x + -8 * Math.cos(angle), ship.y + -8 * Math.sin(angle))
})
