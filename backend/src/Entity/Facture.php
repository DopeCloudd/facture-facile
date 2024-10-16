<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\FactureRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FactureRepository::class)]
#[ApiResource]
class Facture
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $GmtCreation = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $GmtUpdate = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getGmtCreation(): ?\DateTimeInterface
    {
        return $this->GmtCreation;
    }

    public function setGmtCreation(\DateTimeInterface $GmtCreation): static
    {
        $this->GmtCreation = $GmtCreation;

        return $this;
    }

    public function getGmtUpdate(): ?\DateTimeInterface
    {
        return $this->GmtUpdate;
    }

    public function setGmtUpdate(?\DateTimeInterface $GmtUpdate): static
    {
        $this->GmtUpdate = $GmtUpdate;

        return $this;
    }
}
