-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema apiplayerdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema apiplayerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `apiplayerdb` ;
USE `apiplayerdb` ;

-- -----------------------------------------------------
-- Table `apiplayerdb`.`jogador`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `apiplayerdb`.`jogador` ;

CREATE TABLE IF NOT EXISTS `apiplayerdb`.`jogador` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `ataque` INT NOT NULL,
  `defesa` INT NOT NULL,
  `pontos_vida` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `apiplayerdb`.`equipamento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `apiplayerdb`.`equipamento` ;

CREATE TABLE IF NOT EXISTS `apiplayerdb`.`equipamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_jogador` INT NOT NULL,
  `descricao` VARCHAR(150) NULL,
  `bonus_ataque` INT NULL,
  `bonus_defesa` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_equipamento_jogador1_idx` (`id_jogador` ASC),
  CONSTRAINT `fk_equipamento_jogador1`
    FOREIGN KEY (`id_jogador`)
    REFERENCES `apiplayerdb`.`jogador` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `apiplayerdb`.`equipamento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `apiplayerdb`.`equipamento` ;

CREATE TABLE IF NOT EXISTS `apiplayerdb`.`equipamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_jogador` INT NOT NULL,
  `descricao` VARCHAR(150) NULL,
  `bonus_ataque` INT NULL,
  `bonus_defesa` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_equipamento_jogador1_idx` (`id_jogador` ASC),
  CONSTRAINT `fk_equipamento_jogador1`
    FOREIGN KEY (`id_jogador`)
    REFERENCES `apiplayerdb`.`jogador` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Data for table `apiplayerdb`.`jogador`
-- -----------------------------------------------------
START TRANSACTION;
USE `apiplayerdb`;
INSERT INTO `apiplayerdb`.`jogador` (`id`, `nome`, `ataque`, `defesa`, `pontos_vida`) VALUES (DEFAULT, 'player1', 40, 50, 100);

COMMIT;


-- -----------------------------------------------------
-- Data for table `apiplayerdb`.`equipamento`
-- -----------------------------------------------------
START TRANSACTION;
USE `apiplayerdb`;
INSERT INTO `apiplayerdb`.`equipamento` (`id`, `id_jogador`, `descricao`, `bonus_ataque`, `bonus_defesa`) VALUES (DEFAULT, 1, 'espada', 30, 15);
INSERT INTO `apiplayerdb`.`equipamento` (`id`, `id_jogador`, `descricao`, `bonus_ataque`, `bonus_defesa`) VALUES (DEFAULT, 1, 'escudo', 5, 80);

COMMIT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

