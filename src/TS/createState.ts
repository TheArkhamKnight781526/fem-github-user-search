import { recoilPersist } from "recoil-persist";
import { atom, AtomOptions } from "recoil";

const { persistAtom } = recoilPersist();

export default function(options: AtomOptions<any>) {
    return atom({
        ...options,
        effects_UNSTABLE: [ persistAtom ]
    })
}