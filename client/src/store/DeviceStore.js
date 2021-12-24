import {makeAutoObservable} from "mobx"

export default class DeviceStore
{
    constructor()
    {
        this._types =[]
        this._brands =[]
        this._devices=[]
        this._selectedType={}
        this._selectedBrand={}
        makeAutoObservable(this)
    }
    
    setSelectedType(selectedType) 
    {
        this.setPage(1);
        this._selectedType = selectedType;
    }
    setSelectedBrand(selectedBrand) 
    {
        this.setPage(1);
        this._selectedBrand = selectedBrand;
    }

    setType(type)
    {
        this._types=type
    }

    setBrand(brand)
    {
        this._brands=brand
    }

    setDevice(device)
    {
        this._devices=device
    }

    get Types()
    {
        return this._types
    }
    get Brands()
    {
        return this._brands
    }
    get Devices()
    {
        return this._devices
    }

    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }

}