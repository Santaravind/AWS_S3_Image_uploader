package com.Image.ImageUpload.controller;

import com.Image.ImageUpload.service.ImageUploader;
import jakarta.persistence.GeneratedValue;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class S3Controller {

    private ImageUploader uploader;

    public  S3Controller(ImageUploader uploader){
        this.uploader=uploader;
    }

    //upload image
    @PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("file")  MultipartFile file) throws IOException {
           return  ResponseEntity.ok(uploader.uploadImage(file));
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
