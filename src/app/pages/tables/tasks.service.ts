import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs-compat';

interface Task {
  name:string;
  description:string;
  status:string;

}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }
  taskDetailes():Observable<any>{
   return this.http.get<Task[]>(`http://localhost:4000/activetasks`)
  }

  taskDelete(id:string):Observable<any>{
    return this.http.delete(`http://localhost:4000/tasks/${id}`)
  }

  taskEdit(taskUpdate:any):Observable<any>{
    return this.http.put(`http://localhost:4000/tasks/${taskUpdate._id}`,taskUpdate)
  }

  taskCreate(data:any): Observable<any>{
    return this.http.post('http://localhost:4000/taskcreate',data)
   }
  
   taskfileUpload(data:any): Observable<any>{
    return this.http.post('http://localhost:4000/csvfileupload',data)
   }

   taskfileUploadAndRead(data:any): Observable<any>{
    return this.http.post('http://localhost:4300/fileupload',data)
   }
}
