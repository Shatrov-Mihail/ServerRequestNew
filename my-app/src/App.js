import { Routes, Route } from 'react-router-dom';
import { MainPage } from "./MainPage/main-page";
import { TodoPage } from "./TodoPage/todo-page";
import { NotFound } from "./NotFound/not-found";  
import './app.module.css';

export const App = () => (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/task/:id" element={<TodoPage />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
);

