package com.Image.ImageUpload.repositery;

import com.Image.ImageUpload.entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface DocumentRepositery extends JpaRepository<Document,Long> {

    @Query("SELECT d.fileName FROM Document d WHERE d.empId = ?1")
    public String getFileNameByEmpId(long empId);


}
