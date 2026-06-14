# Class diagram for Scuba Steve



```Mermaid
classDiagram
    class Actor {
      - position: (int, int)
      - speed: int
      + move(): void
    }
    
    class EnemyBase {
      + health: int
      + currentSpeed: float
      + takeDamage(): void

    }

    class Sprinter {
      + move(): void
    }

    class Seeker {
      + move(): void
      + deathEffect(): void
    }

    class Bullet {
      + dir: (float, float)
      + speed: float
      
    }

    class Player {
      + health: int
      + ammo: int
      + move(): void
    }

    class Crate {
      + ammo: int
    }
    
    class Game {
      + scenes: str
      + startGame(): void
    }
    
    Actor <|-- Player
    Actor <|-- EnemyBase
    Actor <|-- Bullet
    Debris <|-- Crate
    EnemyBase <|-- Seeker
    EnemyBase <|-- Sprinter
    Game *-- Scene
    Scene *-- Player
    Scene *-- Seeker
    Scene *-- Sprinter
    Scene *-- Crate
    Seeker *-- Crate
```