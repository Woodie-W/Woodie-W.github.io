---
permalink: /blog/light-segment-tree/
title: ""
excerpt: ""
author_profile: false
sidebar:
  - title: "Blog"
    text: |
      - [Back to Blog](/blog/)
      - [Home](/)
---

# Light Segment Tree

*2026.05* &nbsp; `C++` `Segment Tree` `Lazy Propagation`

写线段树的时候维护节点，指针，层级是一件很讨厌的事。开成标准 $2^n$ 大小，就可以直接计算算出层级位置，而不需要使用树状结构来维护，只需要一个类 ST 表数据结构即可。
这是一份按层存储的线段树模板，使用 `st[i][j]` 和 `lazy[i][j]` 表示长度为 $2^i$ 的第 $j$ 个区间节点的区间和与懒惰传播数。区间采用左闭右开 `[l, r)` 的 0 base 写法。

```cpp
#include<bits/stdc++.h>
using namespace std;
using i64 = long long;
const int N = 1 << 19;	// 524288 > 3e5 


void work(){
	vector<i64> a(N);
//	vector<vector<i64>> st(20, vector<i64>(N)); 改用动态建树
	vector<vector<i64>> st, lazy;
	
	for(int x = N; x; x = x >> 1){
		st.push_back(vector<i64>(x, 0));
		x = x >> 1;
	}
	lazy = st; 
	
#define x getx(l,r)
#define y gety(l,r)
#define mid (l+r)/2
	
	// 左闭右开 0 base
	// 规定st/lazy[i][j] 表示 [(1<<i * j, 1<<i * (j+1) ) 	
	auto getx = [&](int l, int r)-> int{return log2(r-l);};
	auto gety = [&](int l, int r)-> int{return l / (r - l);};
	
	// 用左右儿子更新当前节点
	auto pushup = [&](int l, int r) -> void {
		st[x][y] = st[getx(l, mid)][gety(l, mid)] + st[getx(mid, r)][gety(mid, r)];
	};
	
	// 给当前节点打懒标记
	auto apply = [&](int l, int r, i64 val) -> void {
		st[x][y] += val * (r - l);
		lazy[x][y] += val;
	};
	
	// 下传懒标记
	auto pushdown = [&](int l, int r) -> void {
		if (lazy[x][y] == 0 || r - l == 1) return;
		i64 val = lazy[x][y];
		apply(l, mid, val);
		apply(mid, r, val);
		lazy[x][y] = 0;
	};
	
	// 建树
	auto build = [&](auto self, int l, int r) -> void {
		if (r-l == 1) {
			st[0][l] = a[l];
			return;
		}
		self(self, l, mid);
		self(self, mid, r);
		pushup(l, r);
	};	
	
	// 区间加：[ql, qr) += val
	auto update = [&](auto self, int l, int r, int ql, int qr, i64 val) -> void {
		if (qr <= l || r <= ql) return;
		
		if (ql <= l && r <= qr) {
			apply(l, r, val);
			return;
		}
		pushdown(l, r);
		self(self, l, mid, ql, qr, val);
		self(self, mid, r, ql, qr, val);
		pushup(l, r);
	};
	
	// 区间查询：[ql, qr) 的和
	auto query = [&](auto self, int l, int r, int ql, int qr) -> i64 {
		if (qr <= l || r <= ql) return 0;
		if (ql <= l && r <= qr) return st[x][y];
		pushdown(l, r);
		return self(self, l, mid, ql, qr) + self(self, mid, r, ql, qr);
	};
	
#undef x
#undef y
#undef mid
	
}

int main(){
	ios::sync_with_stdio(false);
	freopen("test.txt", "r", stdin);
	cin.tie(0);
	int T = 1;
	while(T--){
		work();
	} 
	return 0;
}
```
