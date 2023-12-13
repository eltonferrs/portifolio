import { MenuMobile } from "../NaveMenu/mobile"
import { MenuNave } from "../NaveMenu"

export const Header = () => {
    return(
        <div className="w-full flex justify-center bg-gray-100 border-b-2 border-b-primary-200">
            <div className="flex w-9/12 flex-row items-center justify-between font-mono text-sm my-5 ">
                <h1>Elton</h1>
                <MenuMobile/>
                <MenuNave />
            </div>
      </div>
    )
}