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
      + sprite: str
      + weight: int
      + state: int
      + target: str
      - baseSpeed: float
      - sprite: str
      + currentSpeed: float
      + liftable: bool
      + vortexable: bool
      + followCursor(): void
      + takeDamage(): void

    }

    class ExplodeEnemy {
      + explode(): void
    }

    class ShooterEnemy {
      + shoot(): void
    }

    class SummonerEnemy {
      - summonInterval: int
      - preferredSummonType: str
      - summonEnemy(): void
    }

    class Bullet {
      - dir: (float, float)
      + speed: int
      
    }

    class Debris {
      - position: (int, int)
      - speed: (int, int)
      - type: int
      + weight: int
      + vortexable: bool
      - sprite: str

      + followCursor(): void
    }

    class Player {
      - lives: int
      - score: int
      + juice: int
      + move(): void
    }

    class JuiceContainer {
      - juiceAmount
      - spawnDroplets(): void
    }

    class Droplets {
      + IncreaseJuice
    }
    
    class Game {
      - player: Player
      - level: Level
      + startGame(): void
      + updateGame(): void
    }
    
    Actor <|-- Player
    Actor <|-- Debris
    Actor <|-- EnemyBase
    Actor <|-- Bullet
    Actor <|-- Debris
    Debris <|-- JuiceContainer
    Actor <|-- Droplets
    EnemyBase <|-- ExplodeEnemy
    EnemyBase <|-- ShooterEnemy
    EnemyBase <|-- SummonerEnemy
    Game *-- Player
    Game *-- Debris
    ShooterEnemy *-- Bullet
    JuiceContainer *-- Droplets
```