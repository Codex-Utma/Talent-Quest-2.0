import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createRoot } from 'react-dom/client'
import './index.css'

import AdminLayout from './layout/AdminLayout.tsx'
import EmployeeLayout from './layout/EmployeeLayout.tsx'

import Login from './Pages/Login.tsx'

import Course from './Pages/Admin/Course/Course.tsx'
import NewCourse from './Pages/Admin/Course/NewCourse.tsx'

import Module from './Pages/Admin/Module/Module.tsx'
import NewModule from './Pages/Admin/Module/Newmodule.tsx'

import Class from './Pages/Admin/Class/Class.tsx'
import NewClass from './Pages/Admin/Class/Newclass.tsx'

import Resource from './Pages/Admin/Resource/Resource.tsx'
import Resourcelink from './Pages/Admin/Resource/Newresourcelink.tsx'

import AddUser from './Pages/Admin/Register/AddUser.tsx'
import AssignWorker from './Pages/Admin/Project/Assignworker.tsx'

import NewProject from './Pages/Admin/Project/Add/NewProject.tsx'

import MisCursos from './Pages/User/Main.tsx'
import Newresource from './Pages/Admin/Resource/Newresource.tsx'
import Project from './Pages/Admin/Project/Project.tsx'

import AdministratorPage from './Pages/Admin/Main.tsx'

import Kardex from './Pages/kardex.tsx'

import EmployeeProject from './Pages/User/Project/proyecto.tsx'
import ModuleFromCourse from './Pages/User/Course/Modules.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>

      <Route index element={<Login />} />

      <Route path="/admin" element={<AdminLayout />} >
        <Route index element={<AdministratorPage />} />
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
                <Route path="add/external" element={<Resourcelink />} />
                <Route path="add/file" element={<Newresource />} />
              </Route>
            </Route>
          </Route>
        </Route>

        <Route path="project">
          <Route index element={<Project />} />
          <Route path="newProject" element={<NewProject />} />
          <Route path="assignWorker" element={<AssignWorker />} />
        </Route>

      </Route>

      <Route path="/employee" element={<EmployeeLayout />} >
        <Route index element={<MisCursos />} />
        <Route path="project" element={<EmployeeProject />} />
        <Route path="kardex" element={<Kardex />} />
        <Route path="course/:courseId" >
          <Route index element={<ModuleFromCourse />} />
          <Route path=":moduleId">
            <Route index element={<ModuleFromCourse />} />

            <Route />
          </Route>
        </Route>
      </Route>

    </Routes>
  </BrowserRouter>,
)
