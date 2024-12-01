import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "E-COMMERCE",
    development : 'Frontend ',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              delectus ratione itaque accusamus ex doloribus iure id ducimus.
              Quaerat odit a fugiat odio quam!`,
    img: "https://imgs.search.brave.com/mzQZcAsKY1o5t_Lsyq27soBAUBntlMjTV50IGf1qthE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzE2LzU1LzAz/LzM2MF9GXzMxNjU1/MDM2Nl82SUV1ZWRB/SnFaOUpZSXFuUXFt/cmFvTFBwZjZxZlBD/Yi5qcGc",
    liveLink: "",
    techStack: ["ReactJS", "Redux", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Spotify Clone",
    development : 'Full-Stack Project ',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              delectus ratione itaque accusamus ex doloribus iure id ducimus.
              Quaerat odit a fugiat odio quam!`,
    img: "https://imgs.search.brave.com/a-ZDrNBbQNMIpmkyncHEZ1YCcyP37ViizecuD-PzLNQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/ZS5tYWdlbmVzdC5j/b20vd3Avd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDkvYmVz/dC0xMDI0eDU3Ny5q/cGc",
    flexDirection: "flex-row-reverse",
    bgColor: "[#58C2F9]",
    techStack: ["ReactJS", "Redux", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Music Player",
    development : 'Full-Stack Project ',
    img: "https://imgs.search.brave.com/LJwjEDunvXKIwVPWRgzIut45iDEuFKY8Q-y8tSe2G3c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kdWV0/LWNkbi52b3gtY2Ru/LmNvbS90aHVtYm9y/LzB4MDoyMDAweDEx/MjUvMjQwMHgxNjAw/L2ZpbHRlcnM6Zm9j/YWwoMTAwMHg1NjM6/MTAwMXg1NjQpOmZv/cm1hdCh3ZWJwKS9j/ZG4udm94LWNkbi5j/b20vdXBsb2Fkcy9j/aG9ydXNfYXNzZXQv/ZmlsZS8yNTY5Mjk4/OS9FMkVfU2NyZWVu/cy5qcGc",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
    delectus ratione itaque accusamus ex doloribus iure id ducimus.
    Quaerat odit a fugiat odio quam!`,
    techStack: ["ReactJS", "Redux", "MongoDB", "Tailwind CSS"],
  },
];

export const projectSlice = createSlice({
  name: "Projects",
  initialState,
  reducers: {},
});

export default projectSlice.reducer;
