package com.Image.ImageUpload.controller;

import com.Image.ImageUpload.entity.Document;
import com.Image.ImageUpload.service.DocuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/database")
public class DocController {

    @Autowired
    private DocuService service;

    @GetMapping("/get-all")
    public List<Document> getAllFilesname(){
        return service.getallfiles();
    }

    @GetMapping("/file/{id}")
    public Optional<Document> getfilebyId(@PathVariable Long id){
        return  service.getFilebyId(id);
    }

    @GetMapping("/filebyempId/{empId}")
    public ResponseEntity<String> getFileName(@PathVariable("empId") Long empId){
        String fileName= service.fetchFileNameByEmpId(empId);
        return ResponseEntity.ok(fileName);
    }

}
