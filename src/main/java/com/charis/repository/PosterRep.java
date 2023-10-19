package com.charis.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.charis.entities.Poster;

public interface PosterRep extends MongoRepository<Poster, Long>{

}
