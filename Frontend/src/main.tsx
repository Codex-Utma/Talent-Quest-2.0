import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createRoot } from 'react-dom/client'
import './index.css'
import AdminLayout from './layout/AdminLayout.tsx'
import EmployeeLayout from './layout/EmployeeLayout.tsx'
import Login from './Pages/Login.tsx'
import Assignworker from './Pages/Admin/Assignworker.tsx'
import Worker from './Pages/Admin/Worker.tsx'
import Newworker from './Pages/Admin/Newworker.tsx'
import Course from './Pages/Admin/Course.tsx'
import Newcourse from './Pages/Admin/Newcourse.tsx'
import Module from './Pages/Admin/Module.tsx'
import Newmodule from './Pages/Admin/Newmodule.tsx'
import Class from './Pages/Admin/Class.tsx'
import Newclass from './Pages/Admin/Newclass.tsx'
import Resource from './Pages/Admin/Resource.tsx'
import Resourcelink from './Pages/Admin/Newresourcelink.tsx'
import Newproyect from './Pages/Admin/Newproject.tsx'
import MisCursos from './Pages/User/panelUsuario.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>

      <Route index element={<Login />} />



        <Route path="/admin" element={<AdminLayout />} >
        <Route path="Assignworker" element={<Assignworker />} />
        <Route path="Worker" element={<Worker />} />
        <Route path="Newworker" element={<Newworker />} />
        <Route path="Course" element={<Course />} />
        <Route path="Newcourse" element={<Newcourse />} />
        <Route path="Module" element={<Module />} />
        <Route path="Newmodule" element={<Newmodule />} />
        <Route path="Class" element={<Class />} />
        <Route path="Newclass" element={<Newclass />} />
        <Route path="Resource" element={<Resource />} />
        <Route path="Newresource" element={<Resource />} />
        <Route path="Newresourcelink" element={<Resourcelink />} />
        <Route path="Project" element={<Newproyect />} />
        <Route path="Newproject" element={<Assignworker />} />


        </Route>

        <Route path="/employee" element={<EmployeeLayout />} >
        <Route path="PanelUsuario" element={<MisCursos />} />

        </Route>

      </Routes>
    </BrowserRouter>,
)
