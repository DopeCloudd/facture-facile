<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\User;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[Route('/api', name: 'api_')]
class AuthController extends AbstractController
{
    #[Route('/register', name: 'register', methods: ['POST'])]
    public function index(ManagerRegistry $doctrine, Request $request, UserPasswordHasherInterface $passwordHasher): JsonResponse
    {
        $em = $doctrine->getManager();
        $decoded = json_decode($request->getContent());
        $email = $decoded->email;
        $plaintextPassword = $decoded->password;
    
        $user = new User();
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $plaintextPassword
        );
        $user->setPassword($hashedPassword);
        $user->setEmail($email);
        $em->persist($user);
        $em->flush();
    
        return $this->json(['message' => 'Registered Successfully']);
    }
}
