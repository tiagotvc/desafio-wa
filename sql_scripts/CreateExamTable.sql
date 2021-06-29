CREATE TABLE IF NOT EXISTS `tbl_exams` (   
    `id`int(10) AUTO_INCREMENT PRIMARY KEY,  
    `name` VARCHAR(70) NOT NULL  ,
    `type` VARCHAR(100) NOT NULL,
    `path` VARCHAR(100) NOT NULL,
    `status` int(10) NOT NULL
     );