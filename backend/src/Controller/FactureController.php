<?php

namespace App\Controller;

use App\Entity\Facture;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Doctrine\ORM\EntityManagerInterface;

#[Route('/api', name: 'api_')]
class FactureController extends AbstractController
{
    #[Route('/factures', name: 'facture_index', methods:['get'] )]
    public function index(EntityManagerInterface $entityManager): JsonResponse
    {
        
        $factures = $entityManager
            ->getRepository(Facture::class)
            ->findAll();
    
        $data = [];
    
        foreach ($factures as $facture) {
           $data[] = [
               'id' => $facture->getId(),
               'name' => $facture->getName(),
           ];
        }
    
        return $this->json($data);
    }

    #[Route('/facture', name: 'facture_create', methods:['post'] )]
    public function create(EntityManagerInterface $entityManager, Request $request): JsonResponse
    {
        $facture = new Facture();
        $facture->setName($request->request->get('name'));
        $facture->setGmtCreation(new \DateTime());
    
        $entityManager->persist($facture);
        $entityManager->flush();
    
        $data =  [
            'response' => 'Facture created'
        ];
            
        return $this->json($data);
    }

    #[Route('/facture/{id}', name: 'facture_show', methods:['get'] )]
    public function show(EntityManagerInterface $entityManager, int $id): JsonResponse
    {
        $facture = $entityManager->getRepository(Facture::class)->find($id);
    
        if (!$facture) {
            return $this->json('No facture found for id ' . $id, 404);
        }
    
        $data =  [
            'id' => $facture->getId(),
            'name' => $facture->getName(),
        ];
            
        return $this->json($data);
    }

    #[Route('/facture/{id}', name: 'project_update', methods:['put', 'patch'] )]
    public function update(EntityManagerInterface $entityManager, Request $request, int $id): JsonResponse
    {
        $facture = $entityManager->getRepository(Facture::class)->find($id);
    
        if (!$facture) {
            return $this->json('No facture found for id ' . $id, 404);
        }
    
        $facture->setName($request->request->get('name'));
        $facture->setGmtUpdate(new \DateTime());
        $entityManager->flush();
    
        $data =  [
            'id' => $facture->getId(),
            'name' => $facture->getName(),
        ];
            
        return $this->json($data);
    }

    #[Route('/facture/{id}', name: 'project_delete', methods:['delete'] )]
    public function delete(EntityManagerInterface $entityManager, int $id): JsonResponse
    {
        $facture = $entityManager->getRepository(Facture::class)->find($id);
    
        if (!$facture) {
            return $this->json('No facture found for id ' . $id, 404);
        }
    
        $entityManager->remove($facture);
        $entityManager->flush();
    
        return $this->json('Deleted a facture successfully with id ' . $id);
    }
}
