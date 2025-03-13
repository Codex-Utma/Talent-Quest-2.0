import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createRoot } from 'react-dom/client'
import './index.css'

import AdminLayout from './layout/AdminLayout.tsx'
import EmployeeLayout from './layout/EmployeeLayout.tsx'

import Login from './Pages/Login.tsx'

import Course from './Pages/Admin/Course/Course.tsx'
import NewCourse from './Pages/Admin/Course/NewCourse.tsx'

import Module from './Pages/Admin/Module/Module.tsx'
import NewModule from './Pages/Admin/Module/NewModule.tsx'

import Class from './Pages/Admin/Class/Class.tsx'
import NewClass from './Pages/Admin/Class/NewClass.tsx'

import Resource from './Pages/Admin/Resource/Resource.tsx'
import Resourcelink from './Pages/Admin/Resource/Newresourcelink.tsx'

import AddUser from './Pages/Admin/Register/AddUser.tsx'
import Worker from './Pages/Admin/Worker.tsx'
import AssignWorker from './Pages/Admin/Project/AssignWorker.tsx'

import NewProject from './Pages/Admin/Project/NewProject.tsx'

import MisCursos from './Pages/User/panelUsuario.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>

      <Route index element={<Login />} />

      <Route path="/admin" element={<AdminLayout />} >
        <Route path="Register" element={<AddUser />} />

        <Route path="courses">
          <Route index element={<Course />} />
          <Route path="add" element={<NewCourse />} />
          <Route path=":courseId">
            <Route index element={<Module />} />
            <Route path="add" element={<NewModule />} />
            <Route path=":moduleId">
              <Route index element={<Class />} />
              <Route path="add" element={<NewClass />} />
              <Route path=":classId">
                <Route index element={<Resource />} />
                <Route path="add" element={<Resourcelink />} />
              </Route>
            </Route>
          </Route>
        </Route>

        <Route path="Worker" element={<Worker />} />
        <Route path="Newproyect" element={<NewProject />} />
        <Route path="Assignworker" element={<AssignWorker />} />
      </Route>

      <Route path="/employee" element={<EmployeeLayout />} >
        <Route path="PanelUsuario" element={<MisCursos />} />
      </Route>

    </Routes>
  </BrowserRouter>,
)
