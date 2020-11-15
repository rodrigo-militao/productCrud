package com.example.apiRest.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@Data
@NoArgsConstructor
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @NonNull
    @Column(name = "product_name", nullable = false)
    private String productName;

    @NonNull
    @Column(name = "item_quantity", nullable = false)
    private int itemQuantity;

    @NonNull
    @Column(name = "unitary_value", nullable = false)
    private Float unitaryValue;

    
}