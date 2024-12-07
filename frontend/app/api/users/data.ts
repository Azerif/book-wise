import { User } from "@/types/interfaces";

export const users: User[] = [
  {
    id: "1",
    email: "admin@admin.com",
    password: "admin123",
    name: "admin",
    phone: "08123456789",
    role: "admin",
  },
  {
    id: "2",
    email: "mahasiswa@student.com",
    password: "mahasiswa123",
    name: "mahasiswa",
    phone: "08123456",
    role: "student",
    nim: "1301223164",
    year: "2022",
  },
  {
    id: "3",
    email: "dosen@lecturer.com",
    password: "dosen123",
    name: "dosen",
    phone: "08123456",
    role: "lecturer",
    nip: "1301223164",
  },
];
