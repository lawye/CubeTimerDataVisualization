#include<stdio.h>
int main(){
	int flag=0;
	char tmp;
	while(~scanf("%c",&tmp)){
		if(tmp=='\"'&&flag==0)flag=1;
		else if(tmp=='\"')flag=0;
		else if(flag==1&&tmp=='\n')tmp=' ';
		printf("%c",tmp);
	}
	return 0;
} 
