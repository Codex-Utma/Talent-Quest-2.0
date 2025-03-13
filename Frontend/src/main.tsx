import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createRoot } from 'react-dom/client'
import './index.css'

import AdminLayout from './layout/AdminLayout.tsx'
import EmployeeLayout from './layout/EmployeeLayout.tsx'

import Login from './Pages/Login.tsx'

import Course from './Pages/Admin/Course/Course.tsx'
import Newcurse from './Pages/Admin/Course/Newcurse.tsx'

import Module from './Pages/Admin/Module.tsx'
import Newmodule from './Pages/Admin/Module/Newmodule.tsx'

import Class from './Pages/Admin/Class.tsx'
import Newclass from './Pages/Admin/Class/Newclass.tsx'

import Resource from './Pages/Admin/Resource.tsx'
import Resourcelink from './Pages/Admin/Newresourcelink.tsx'

import Newworker from './Pages/Admin/Newworker.tsx'
import Worker from './Pages/Admin/Worker.tsx'
import Assignworker from './Pages/Admin/Assignworker.tsx'

import Newproyect from './Pages/Admin/Newproject.tsx'

import MisCursos from './Pages/User/panelUsuario.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>

      <Route index element={<Login />} />

      <Route path="/admin" element={<AdminLayout />} >
        <Route path="Register" element={<Newworker />} />

        <Route path="courses">
          <Route index element={<Course />} />
          <Route path="add" element={<Newcurse />} />
          <Route path=":courseId">
            <Route index element={<Module />} />
            <Route path="add" element={<Newmodule />} />
            <Route path=":moduleId">
              <Route index element={<Class />} />
              <Route path="add" element={<Newclass />} />
              <Route path=":classId">
                <Route index element={<Resource />} />
                <Route path="add" element={<Resourcelink />} />
              </Route>
            </Route>
          </Route>
        </Route>

        <Route path="Worker" element={<Worker />} />
        <Route path="Newproyect" element={<Newproyect />} />
        <Route path="Assignworker" element={<Assignworker />} />
      </Route>

      <Route path="/employee" element={<EmployeeLayout />} >
        <Route path="PanelUsuario" element={<MisCursos />} />
      </Route>

    </Routes>
  </BrowserRouter>,
)
