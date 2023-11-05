/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<{ title }> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};