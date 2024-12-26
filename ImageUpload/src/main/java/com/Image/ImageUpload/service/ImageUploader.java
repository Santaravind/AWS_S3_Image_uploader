package com.Image.ImageUpload.service;

import com.Image.ImageUpload.entity.Document;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ImageUploader {

    String uploadImage(MultipartFile image ,Long empId) throws IOException;

    List<String> allFiles();

    String preSingedUrl(String fileName);

    String getImagetUrlByName(String fileName);



}
