CREATE TABLE vehiculo (
  id INTEGER NOT NULL AUTO_INCREMENT,
  vim varchar(45) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE usuario (
  id INTEGER NOT NULL AUTO_INCREMENT,
  nombre_usuario varchar(45) NOT null,
  password varchar(45) NOT null,
  PRIMARY KEY (id)
);

CREATE TABLE estado_observaciones (
  id INTEGER NOT NULL AUTO_INCREMENT,
  nombre varchar(45) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE observaciones (
  id INTEGER NOT NULL AUTO_INCREMENT,
  detalle varchar(50) NOT NULL,
  idestado INTEGER,
  idvehiculo INTEGER NOT NULL,
  creado_por INTEGER NOT NULL,
  resuelto_por INTEGER ,
  PRIMARY KEY (id),
  constraint fk_id01 FOREIGN KEY (idestado) REFERENCES estado_observaciones (id),
  constraint fk_id02 FOREIGN KEY (idvehiculo) REFERENCES vehiculo (id),
  constraint fk_id03 FOREIGN KEY (creado_por) REFERENCES usuario (id),
  constraint fk_id04 FOREIGN KEY (resuelto_por) REFERENCES usuario (id)
);