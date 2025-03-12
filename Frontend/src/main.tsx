import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createRoot } from 'react-dom/client'
import './index.css'
import AdminLayout from './layout/AdminLayout.tsx'
import EmployeeLayout from './layout/EmployeeLayout.tsx'
import Login from './Pages/Login.tsx'
import Assignworker from './Pages/Admin/Assignworker.tsx'
import Worker from './Pages/Admin/Worker.tsx'
import Newcurse from './Pages/Admin/Course/Newcurse.tsx'
import Newmodule from './Pages/Admin/Module/Newmodule.tsx'
import Newclass from './Pages/Admin/Class/Newclass.tsx'
import Newworker from './Pages/Admin/Newworker.tsx'
import Course from './Pages/Admin/Course.tsx'
import Module from './Pages/Admin/Module.tsx'
import Class from './Pages/Admin/Class.tsx'
import Resource from './Pages/Admin/Resource.tsx'
import Resourcelink from './Pages/Admin/Newresourcelink.tsx'
import Newproyect from './Pages/Admin/Newproject.tsx'
import MisCursos from './Pages/User/panelUsuario.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>

      <Route index element={<Login />} />



        <Route path="/admin" element={<AdminLayout />} >
          <Route path="Register" element={<Newworker />} />
          <Route path="Courses" >
            <Route path="Add" element={<Newcurse />} />
          </Route>
          <Route path="Modules/:courseId">
            <Route path="Add" element={<Newmodule />} />
          </Route>
          <Route path="Classes/:courseId">
            <Route path=":moduleId/Add" element={<Newclass />} />
          </Route>
          <Route path="Worker" element={<Worker />} />
          <Route path="Newmodule" element={<Newmodule />} />
          <Route path="Newclass" element={<Newclass />} />
          <Route path="Resource" element={<Resource />} />
          <Route path="Resourcelink" element={<Resourcelink />} />
          <Route path="Newproyect" element={<Newproyect />} />
          <Route path="Assignworker" element={<Assignworker />} />
          <Route path="PanelUsuario" element={<MisCursos />} >
        <Route path="Assignworker" element={<Assignworker />} />
        <Route path="Worker" element={<Worker />} />
        <Route path="Newworker" element={<Newworker />} />
        <Route path="Course" element={<Course />} />
        <Route path="Newcourse" element={<Newcurse />} />
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
        </Route>

        <Route path="/employee" element={<EmployeeLayout />} >
        <Route path="PanelUsuario" element={<MisCursos />} />

        </Route>

      </Routes>
    </BrowserRouter>,
)
