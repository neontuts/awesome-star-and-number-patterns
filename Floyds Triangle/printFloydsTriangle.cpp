#include <iostream>
using namespace std;

int main() {
  int n;
  int count = 1;
  cout<<"Enter the value of n : "<<endl;
  cin>>n;

  for (int i=1; i<=n; i++) {
    for (int j=1; j<=n; j++) {
      if (j <= i) {
        if (count < 10) {
          cout<<count<<"  ";
        }
        else {
          cout<<count<<" ";
        }
        count++;
      }
      else {
        cout<<" ";
      }
    }
    cout<<endl;
  }

  return 0;
}

