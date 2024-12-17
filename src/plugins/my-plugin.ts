export default function myPlugin() {
    return {
        name: "my-plugin",
        transform(src: any, id: string) {
            if (id.endsWith('.svg')) {
                console.log('\n===>svg found! ' + id + '\n');
            }
        }
    };
}