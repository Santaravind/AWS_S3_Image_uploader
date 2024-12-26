package com.Image.ImageUpload.controller;

import com.Image.ImageUpload.entity.Document;
import com.Image.ImageUpload.repositery.DocumentRepositery;
import com.Image.ImageUpload.service.DocuService;
import com.Image.ImageUpload.service.ImageUploader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class S3Controller {

    @Autowired
    private DocumentRepositery repositery;

    @Autowired
    private ImageUploader uploader;



    public  S3Controller(ImageUploader uploader){
        this.uploader=uploader;
    }

    //upload image
    @PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("file")  MultipartFile file ,@RequestParam("empID")  Long empId) throws IOException {
           return  ResponseEntity.ok(uploader.uploadImage(file,empId));
    }

    //getall request
    @GetMapping("/getall")
    public List<String> getAllFiles(){
        return uploader.allFiles();
    }


    //get url by name

    @GetMapping("/{fileName}")
    public String urlByName(@PathVariable("fileName") String fileName){

        return uploader.getImagetUrlByName(fileName);
    }



}
