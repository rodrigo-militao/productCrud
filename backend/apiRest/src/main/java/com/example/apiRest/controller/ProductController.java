package com.example.apiRest.controller;

import java.util.List;
import java.util.Optional;

import com.example.apiRest.model.Product;
import com.example.apiRest.service.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    @ResponseBody
    public List<Product> listAll() {
        return productService.findAll();
    }

    @PostMapping("/")
    @ResponseBody
    public Product saveOne(@RequestBody Product requestProduct) {
        return productService.saveProduct(requestProduct);
    }

    @GetMapping("/{id}")
    @ResponseBody
    public Optional<Product> findOne(@PathVariable("id") Long id) {
        return productService.findById(id);
    }

    @PutMapping("/{id}")
    @ResponseBody
    public Product updateOne(@RequestBody Product requestProduct, @PathVariable("id") Long id){
        return productService.updateProduct(id, requestProduct);
    }

    @DeleteMapping("/{id}")
    public Boolean delete(@PathVariable("id") Long id){
        return productService.deleteById(id);
    }

}
