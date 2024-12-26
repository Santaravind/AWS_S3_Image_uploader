package com.Image.ImageUpload.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;


@Entity
@Table(name = "Document")


public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long docID;

    private Long empId;
    
    private String fileName;

    @Temporal(TemporalType.TIMESTAMP)
    private Date uploadDate;

    public Document(Long docID, Long empId, String fileName,Date uploadDate) {
        this.docID = docID;
        this.empId = empId;
        this.fileName = fileName;
        this.uploadDate = uploadDate;
    }





    public Document() {

    }

    public Document(String fileName, Long empId, Date uploadDate) {
        this.empId = empId;
        this.fileName = fileName;
        this.uploadDate = uploadDate;
    }

    public Long getDocID() {
        return docID;
    }

    public void setDocID(Long docID) {
        this.docID = docID;
    }

    public Long getEmpID() {
        return empId;
    }

    public void setEmpID(Long empID) {
        this.empId = empId;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }



    public Date getUploadDate() {
        return uploadDate;
    }

    public void setUploadDate(Date uploadDate) {
        this.uploadDate = uploadDate;
    }
}
