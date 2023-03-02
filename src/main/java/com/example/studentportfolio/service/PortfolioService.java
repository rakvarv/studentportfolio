package com.example.studentportfolio.service;

import com.example.studentportfolio.model.Portfolio;

import java.util.List;

public interface PortfolioService {
    public Portfolio savePortfolio(Portfolio portfolio);
    public List<Portfolio> getAllProjects();
}
