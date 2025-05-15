import { IServiceProvider } from "angular";
import app from "../app";

export interface ISerialService {
    generate(): string;
}


function serialProvider() {
    let _length = 20;

    this.setLength = function(length: number): void {
        _length = length > 0 ? length : 20;
    };

    this.$get = function(): { generate(): string } {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return {
            generate() {
                const randomPart = Array.from({ length: _length })
                    .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
                    .join('');
                return randomPart + '-' + Date.now();
            }
        };
    };
}

app.provider('serialService', serialProvider as any);
