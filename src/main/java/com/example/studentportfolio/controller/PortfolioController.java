package com.example.studentportfolio.controller;

import com.example.studentportfolio.model.Portfolio;
import com.example.studentportfolio.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/portfolio")
@CrossOrigin
public class PortfolioController {
    @Autowired
    private PortfolioService portfolioService;

    @PostMapping("/add")
    public String add(@RequestBody Portfolio portfolio){
        portfolioService.savePortfolio(portfolio);
        return "New project is added";
    }

    @GetMapping("/getAll")
    public List<Portfolio> getAllProjects(){
        return portfolioService.getAllProjects();
    }
}
