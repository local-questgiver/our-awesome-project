let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f 3 3 3 f . . . . . . 
    . . . . f 3 3 3 3 3 f . . . . . 
    . . . . f 3 d d d 3 f . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . f f d d d d d f f . . . . 
    . . f d d d d d d d d d f . . . 
    . . f d d d d d d d d d f . . . 
    . . f d d d d f d d d d f . . . 
    . . . f d d f . f d d f . . . . 
    . . . . f f . . . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.sayText("balls")
