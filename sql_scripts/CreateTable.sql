CREATE TABLE IF NOT EXISTS `tbl_labs` (   
    `id`int(10) AUTO_INCREMENT PRIMARY KEY,  
    `name` VARCHAR(70) NOT NULL  ,
    `address` VARCHAR(100) NOT NULL,
    `status` int(10) NOT NULL
     );