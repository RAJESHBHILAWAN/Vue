import { BehaviorSubject } from 'rxjs'

const initialState = { count: 0 } // Initial state

const dataSubject = new BehaviorSubject(initialState)

export const dataService = {
  getData: () => dataSubject.asObservable(),
  updateData: (newData) => dataSubject.next(newData)
}
