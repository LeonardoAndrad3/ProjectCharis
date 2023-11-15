package com.charis.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import com.charis.entities.Image;

public interface ImagesRep extends MongoRepository<Image, String>{

}
