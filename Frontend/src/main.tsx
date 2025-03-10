import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createRoot } from 'react-dom/client'
import './index.css'
import AdminLayout from './layout/AdminLayout.tsx'
import EmployeeLayout from './layout/EmployeeLayout.tsx'
import Login from './Pages/Login.tsx'
import Adduser from './Pages/Admin/Adduser.tsx'
import Worker from './Pages/Admin/Worker.tsx'
import Newcurse from './Pages/Admin/Newcurse.tsx'
import Newmodule from './Pages/Admin/Newmodule.tsx'
import Newclass from './Pages/Admin/Newclass.tsx'
import Resource from './Pages/Admin/Resource.tsx'
import Resourcelink from './Pages/Admin/Resourcelink.tsx'
import Newproyect from './Pages/Admin/Newproyect.tsx'
import Assignworker from './Pages/Admin/Assignworker.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>

      <Route index element={<Login />} />

        

        <Route path="/admin" element={<AdminLayout />} >
        <Route path="Adduser" element={<Adduser />} />
        <Route path="Worker" element={<Worker />} />
        <Route path="Newcurse" element={<Newcurse />} />
        <Route path="Newmodule" element={<Newmodule />} />
        <Route path="Newclass" element={<Newclass />} />
        <Route path="Resource" element={<Resource />} />
        <Route path="Resourcelink" element={<Resourcelink />} />
        <Route path="Newproyect" element={<Newproyect />} />
        <Route path="Assignworker" element={<Assignworker />} />

         

        </Route>

        <Route path="/employee" element={<EmployeeLayout />} >
        </Route>

      </Routes>
    </BrowserRouter>,
)
