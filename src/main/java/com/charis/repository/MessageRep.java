package com.charis.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.charis.entities.Message;

public interface MessageRep extends MongoRepository<Message, Long>{

}
