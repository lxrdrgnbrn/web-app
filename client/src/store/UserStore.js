import {makeAutoObservable} from "mobx"

export default class UserStore
{
    constructor()
    {
        this._isAuth={}
        this._user = {}
        makeAutoObservable(this)
    }

    setAuth(bool)
    {
        this._isAuth = bool
    }

    setUser(user)
    {
        this._user = user
    }

    get isAuth()
    {
        return this._isAuth
    }
    get User()
    {
        return this._user
    }

}