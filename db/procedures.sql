USE domiot;

DELIMITER $$
USE `domiot`$$

CREATE PROCEDURE `postSensorData` (
  IN _Ubicacion VARCHAR(50),
  IN _Estado_luz VARCHAR(10),
  IN _Estado_sensor VARCHAR(10),
  IN _Consumo FLOAT,
  IN _Temperatura FLOAT,
  IN _Humedad FLOAT
)
BEGIN   
    INSERT INTO habitacion (Ubicacion, Estado_luz, Estado_sensor, Consumo, Temperatura, Humedad)
    VALUES (_Ubicacion, _Estado_luz, _Estado_sensor, Consumo, _Temperatura, _Humedad);  
END