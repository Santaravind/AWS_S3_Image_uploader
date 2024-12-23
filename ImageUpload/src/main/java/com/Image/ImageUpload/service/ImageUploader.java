package com.Image.ImageUpload.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ImageUploader {

    String uploadImage(MultipartFile image) throws IOException;

    List<String> allFiles();

    String preSingedUrl(String fileName);

    String getImagetUrlByName(String fileName);


}
