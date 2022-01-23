import { render } from "preact"
import { App } from './app';
import { RecoilRoot } from "recoil";

render(<RecoilRoot><App /></RecoilRoot>, document.getElementById('app')!)
