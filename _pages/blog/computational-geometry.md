---
permalink: /blog/computational-geometry/
title: ""
excerpt: ""
author_profile: false
sidebar:
  - text: |
      <div class="profile_box">
        <div class="author__avatar">
          <img src="/images/android-chrome-512x512.png" alt="Blog">
        </div>
        <div class="author__content">
          <h3 class="author__name">Blog</h3>
          <p class="author__bio">OI & Research Notes</p>
        </div>
      </div>

      <div class="author__urls-wrapper">
        <ul class="author__urls">
          <li><a href="/blog/">Back to Blog</a></li>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
---

# Computational Geometry

*2026.05* &nbsp; `C++` `Geometry` `Template`

计算几何基础模板，封装了点、向量、叉积、点积、点线距离、垂足、凸包和直线交点等常用操作。  

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <utility>
#include <cmath>
#include <complex>
#include <iomanip>
#define sz(x) (x).size()
using namespace std;
using i64 = long long;
using ld = long double;
using Pl = complex<ld>;
using par = pair<ld, ld>;
const ld eps = 1e-10L;

// atan2  (-Pi, Pi]
#ifndef M_PI
#define M_PI ((ld)3.14159265358979323846)
#endif

#ifndef M_PI_2
#define M_PI_2 ((ld)1.57079632679489661923)
#endif
Pl fc(const par &a){return {a.first, a.second};}
par fp(const Pl &a){return {a.real(), a.imag()};}
par operator-(const par&a, const par&b){return make_pair(a.first - b.first, a.second - b.second);}
par operator+(const par&a, const par&b){return make_pair(a.first + b.first, a.second + b.second);}
par operator*(const par&a, const par&b){
	Pl A = fc(a), B = fc(b); 	A *= B;
	return make_pair(A.real(), A.imag());
}
par operator/(const par&a, const par&b){
	Pl A = fc(a), B = fc(b); 	A /= B;
	return make_pair(A.real(), A.imag());
}
ld abs(par a){return sqrt(a.first*a.first + a.second*a.second);}
ld abs(par a, par b){ par c = a - b; return sqrt(c.first*c.first + c.second*c.second);}
ld cross(Pl a, Pl b){ return imag(a * conj(b)); } // 向量叉乘
ld cross(par a, par b){ return a.first*b.second - a.second*b.first;}

ld dot(Pl a, Pl b){ return real(conj(a) * b); } // 向量点乘
ld dot(par a, par b){ return a.first*b.first + a.second*b.second;}

ld h_len(Pl p, Pl a, Pl b){	return fabs(cross(a-p, b-p))/abs(a-b);} //点线距
ld h_len(par p, par a, par b){ return fabs(cross(a-p, b-p))/abs(a-b);}
bool isInLine(Pl a, Pl b, Pl c){		// 判断共线, (a-b)/(a-c)和共轭相同
	return abs(a * conj(b) - conj(c) + b * (conj(c) - conj(a)) + c * (conj(a) - conj(b))) <= eps; 
}
bool isVertical(Pl a, Pl b, Pl c, Pl d){		// ab 垂直 cd
	return abs( (a-b)/(c-d) + conj((a-b)/(c-d))) <= eps;
}
Pl foot(Pl p, Pl a, Pl b){			//垂足
	return ((a * conj(p - b) - b * conj(p - a)) / conj(a - b) + p) / (ld)2;
}
par foot(par p, par a, par b){
	Pl P = fc(p), A = fc(a), B = fc(b); return fp(foot(P, A, B));
}

vector<par> convex(vector<par> M) {
	int n = M.size(); vector<int> stk;  
	sort(M.begin(), M.end());  
	for (int i = 0; i < n; ++i){
		while (stk.size() >= 2 and cross(M[stk.back()] - M[stk[sz(stk) - 2]], M[i] - M[stk.back()]) <= 0)
			stk.pop_back();
		stk.push_back(i);
	}
	unsigned lower_size = sz(stk);
	for (int i = n - 1; i >= 0; --i){
		while (stk.size() > lower_size and cross(M[stk.back()] - M[stk[sz(stk) - 2]], M[i] - M[stk.back()]) <= 0) 
			stk.pop_back();
		stk.push_back(i);
	}
	stk.pop_back(); vector<par> ans;
	for (int i : stk) ans.push_back(M[i]);
	return ans;
}

Pl crossing(Pl a, Pl b, Pl c, Pl d) {
	ld x1 = real(a), y1 = imag(a), x2 = real(b), y2 = imag(b);
	ld x3 = real(c), y3 = imag(c), x4 = real(d), y4 = imag(d);
	ld denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
	if (denom == 0) 	return Pl(NAN, NAN);
	ld x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denom;
	ld y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denom;
	return Pl(x, y);  
}

int n, num, cnt;
ld x, y;

void work(){

}

int main() {
//	freopen("test.txt", "r", stdin);
	ios::sync_with_stdio(0); cin.tie(0);
	cout << fixed << setprecision(5);
	int T = 1;
//	cin >> T;
	while (T--) 
		work();
	return 0;
}
```
